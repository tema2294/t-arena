import {Typography} from "@mui/material";
import {Icon} from "components/Icon";
import {Loader} from "components/Loader";
import {CURRENCY_SYMBOL, ECurrency} from "constants/index";
import {EDictionaryKey, useTranslation} from "hocs/Localization";
import {usePriceInCurrency} from "hooks/use-price-in-currency";
import React, {useEffect, useMemo} from "react";
import {TBaseQueryReturnType, useCreateOrderMutation} from "redux-store/api";
import {selectOrderModalData, setOrderModal} from "redux-store/appState";
import {useAppDispatch, useAppSelector} from "redux-store/hooks";
import {getFormatDeliveryDate} from "tools/get-format-delivery-date";
import {getFormatPrice} from "tools/get-format-price";
import {getPriceUniqueKey} from "tools/get-price-unique-key";
import {
    ActionButton,
    CalculateResult,
    CalculateResultContainer,
    CalculateResultDescription,
    CalculateRow,
    CalculateTitle,
    MainContent,
    Modal,
    ModalContainer,
    Reminder,
    ResultContainer,
    SelectButton,
    SelectContainer,
    SelectDescription,
    SelectInput,
    SelectWrapper,
    Subtitle,
    Title,
    TitleContainer,
    TitleTextContainer
} from './OrderModal.styles';
import {useOrderModalCalculating} from "./OrderModal.utils";


export const OrderModal = () => {
    const dispatch = useAppDispatch();
    const orderModalData = useAppSelector(selectOrderModalData);
    const hasData = !!orderModalData;
    const {
        minQuantity = 1,
        id: priceId,
        clientPrice = 1,
        availableQuantity = 1,
        deliveryDate,
        deliveryPriceId,
        zone,
        formedItemName,
        specLines = {},
        unusedSpecLines = {},
    } = orderModalData || {};
    console.log('update OrderModal');

    const {zoneName = ''} = zone || {};
    const formatDeliveryDate = getFormatDeliveryDate(deliveryDate);
    const {translate} = useTranslation();
    const {
        count,
        handleDecrementCount,
        handleIncrementCount,
        setCount,
        handleChange
    } = useOrderModalCalculating({availableQuantity, minQuantity});
    const [createOrderQuery, {isLoading}] = useCreateOrderMutation();

    const {
        symbol: currencySymbol,
        formatPrice: formatPriceInCurrency,
        currencyRatio,
        currentCurrency
    } = usePriceInCurrency(clientPrice);

    const {formatUsdPrice, formatSum, formatCurrencySum} = useMemo(() => {
        const usdSum = clientPrice * count;
        const formatUsdPrice = getFormatPrice(clientPrice, ECurrency.USD);
        const formatSum = getFormatPrice(clientPrice * count, ECurrency.USD);
        const formatCurrencySum = getFormatPrice(usdSum * currencyRatio, currentCurrency);

        return {formatUsdPrice, formatSum, formatCurrencySum}
    }, [currencyRatio, count, orderModalData])

    const handleCloseModal = (): void => {
        dispatch(setOrderModal(undefined));
    }

    const createOrder = async () => {
        const hasData = !!deliveryPriceId && !!priceId && !!zone && !!formedItemName;

        if (!hasData) return;
        const {error} = await createOrderQuery({
            body: {
                price: priceId,
                delivery_price: deliveryPriceId,
                line_quantity: count,
            },
            zone,
            formedItemName,
            uniquePriceKey: getPriceUniqueKey({id: priceId, deliveryPriceId}),
            specLines,
            unusedSpecLines,
        }) as TBaseQueryReturnType;

        const hasResponseError = !!error;

        if (hasResponseError) {
            alert('Не удалось оформить заказ,пожалуйста попробуйте позднее');
        } else {
            handleCloseModal();
        }
    };


    useEffect(() => {
        if (hasData) {
            setCount(minQuantity)
        }
    }, [hasData]);

    return (
        <Modal
            open={hasData}
            onClose={handleCloseModal}
        >
            <ModalContainer>
                <Loader isLoading={isLoading} hasShadow={true}/>
                <TitleContainer>
                    <TitleTextContainer>
                        <Title variant={'body1'}>{formedItemName}</Title>
                        <Subtitle color={'var(--text-color)'}
                                  variant={'caption'}>{`${zoneName}, ${formatDeliveryDate}`}</Subtitle>
                    </TitleTextContainer>
                    <Icon onClick={handleCloseModal} activeCursor={true} name={'OrderModalCross'}/>
                </TitleContainer>
                <MainContent>
                    <SelectWrapper>
                        <Typography color={'var(--article-color)'} variant={'body1'}>
                            {translate(EDictionaryKey.Quantity)}
                        </Typography>
                        <SelectContainer>
                            <SelectButton onClick={handleDecrementCount}>
                                <Icon activeCursor={true} name={'Minus'}/>
                            </SelectButton>
                            <SelectInput type="text" onChange={handleChange}
                                         value={count}/>
                            <SelectButton onClick={handleIncrementCount}>
                                <Icon activeCursor={true} name={'Plus'}/>
                            </SelectButton>
                        </SelectContainer>
                        <SelectDescription color={'var(--text-color)'}>
                            {`${availableQuantity} ${translate(EDictionaryKey.AvailableAndMinOrder)} ${minQuantity}`}
                        </SelectDescription>
                    </SelectWrapper>
                    <ResultContainer>
                        <CalculateRow>
                            <CalculateTitle color={'var(--article-color)'}>
                                {translate(EDictionaryKey.PricePerItem)}
                            </CalculateTitle>
                            <CalculateResultContainer>
                                <CalculateResult color={'var(--article-color)'}>
                                    {`${formatUsdPrice} ${CURRENCY_SYMBOL.USD}`}
                                </CalculateResult>
                                <CalculateResultDescription color={'var(--table-text-accent-color)'}
                                                            variant={'caption'}>
                                    {`~ ${formatPriceInCurrency} ${currencySymbol}`}
                                </CalculateResultDescription>
                            </CalculateResultContainer>
                        </CalculateRow>
                        <CalculateRow>
                            <CalculateTitle color={'var(--article-color)'}>
                                {translate(EDictionaryKey.Total)}
                            </CalculateTitle>
                            <CalculateResultContainer>
                                <CalculateResult color={'var(--article-color)'}>
                                    {`${formatSum} ${CURRENCY_SYMBOL.USD}`}
                                </CalculateResult>
                                <CalculateResultDescription color={'var(--table-text-accent-color)'}
                                                            variant={'caption'}>
                                    {`~ ${formatCurrencySum} ${currencySymbol}`}
                                </CalculateResultDescription>
                            </CalculateResultContainer>
                        </CalculateRow>
                    </ResultContainer>
                    <Reminder color={'var(--text-color)'} variant={'caption'}>
                        {`${translate(EDictionaryKey.ReminderNote)} ${currencyRatio} ${currentCurrency}`}
                    </Reminder>
                    <ActionButton onClick={createOrder} variant={'contained'}>
                        {translate(EDictionaryKey.PlaceOrder)}
                    </ActionButton>
                </MainContent>
            </ModalContainer>
        </Modal>
    )

}