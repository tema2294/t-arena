import {TTranslationsDictionary} from "./Localization.types";

export enum EDictionaryKey {
    Logout,
    DarkMode,
    Language,
    Marketplace,
    Cart,
    Orders,
    Market,
    Brand,
    Category,
    Stock,
    MyProducts,
    Search,
    FilterByMarket, FilterByCategory, FilterByBrand,
    Product, MinPrice,
    Russian,
    English,
    WelcomeBack,
    SignIn,
    SignUp,
    AlreadyHaveAnAccount,
    NewToTradeArena,
    GetStarted,
    EmailAddress, Password, TelegramNickname,
    PasswordConfirmation,
    UserName,
    RegistrationSuccessful,
    PricePerItem, Total,
    ReminderNote, Cancel,
    PlaceOrder, AvailableAndMinOrder,
    Rub, OfferTableBuy, EnterYourName, EnterYourEmail, InStock,
    Report,
    Created, Order, Stage, ShipDate, QTY, OrderSummary, Price,
    CountNumber,
    Delivery, Offers, Quantity, Purchases, NoPurchasesYet, NoPricesYet
}

export const TRANSLATIONS_DICTIONARY: TTranslationsDictionary = {
    Eng: {
        [EDictionaryKey.Logout]: "Log out",
        [EDictionaryKey.DarkMode]: "Dark mode",
        [EDictionaryKey.Language]: "English",
        [EDictionaryKey.Marketplace]: "Marketplace",
        [EDictionaryKey.Cart]: "Cart",
        [EDictionaryKey.Orders]: "Orders",
        [EDictionaryKey.Market]: "Market",
        [EDictionaryKey.Brand]: "Brand",
        [EDictionaryKey.Category]: "Category",
        [EDictionaryKey.Stock]: "In stock",
        [EDictionaryKey.MyProducts]: "My products",
        [EDictionaryKey.Search]: "Search",
        [EDictionaryKey.FilterByMarket]: "Filter by market",
        [EDictionaryKey.FilterByCategory]: "Filter by category",
        [EDictionaryKey.FilterByBrand]: "Filter by brand",
        [EDictionaryKey.Product]: "Product",
        [EDictionaryKey.MinPrice]: "Min. price",
        [EDictionaryKey.English]: "English",
        [EDictionaryKey.Russian]: "Russian",
        [EDictionaryKey.WelcomeBack]: "Welcome back",
        [EDictionaryKey.SignIn]: "Sign in",
        [EDictionaryKey.SignUp]: "Sign up",
        [EDictionaryKey.AlreadyHaveAnAccount]: "Already have an account?",
        [EDictionaryKey.NewToTradeArena]: "New to Trade Arena?",
        [EDictionaryKey.GetStarted]: "Get started",
        [EDictionaryKey.EmailAddress]: "Email address",
        [EDictionaryKey.TelegramNickname]: "Telegram @nickname",
        [EDictionaryKey.Password]: "Password",
        [EDictionaryKey.PasswordConfirmation]: "Password confirmation",
        [EDictionaryKey.UserName]: "User name",
        [EDictionaryKey.RegistrationSuccessful]: "Your application has been accepted, wait for confirmation of registration!",
        [EDictionaryKey.PricePerItem]: "Price per item",
        [EDictionaryKey.Total]: "Total",
        [EDictionaryKey.ReminderNote]: "* While product prices are shown in rubles (RUB) for your reference, all transactions will be processed in US Dollars (USD). $1 USD =",
        [EDictionaryKey.Cancel]: "Cancel",
        [EDictionaryKey.PlaceOrder]: "Place an order",
        [EDictionaryKey.AvailableAndMinOrder]: "available, min. order",
        [EDictionaryKey.Rub]: "RUB",
        [EDictionaryKey.OfferTableBuy]: "Buy",
        [EDictionaryKey.EnterYourName]: "Enter your name",
        [EDictionaryKey.EnterYourEmail]: "Enter your email",
        [EDictionaryKey.InStock]: "In stock",
        [EDictionaryKey.Report]: "Report",
        [EDictionaryKey.Created]: "Created",
        [EDictionaryKey.Order]: "Order #",
        [EDictionaryKey.Stage]: "Stage",
        [EDictionaryKey.ShipDate]: "Ship. date",
        [EDictionaryKey.QTY]: "QTY",
        [EDictionaryKey.OrderSummary]: "Order summary",
        [EDictionaryKey.Price]: "Price",
        [EDictionaryKey.CountNumber]: "#",
        [EDictionaryKey.Delivery]: "Delivery",
        [EDictionaryKey.Offers]: "Offers",
        [EDictionaryKey.Quantity]: "Quantity",
        [EDictionaryKey.Purchases]: "Purchases",
        [EDictionaryKey.NoPurchasesYet]: "No purchases yet",
        [EDictionaryKey.NoPricesYet]: "No prices yet",
    },
    Ru: {
        [EDictionaryKey.Logout]: "Выйти",
        [EDictionaryKey.DarkMode]: "Темная тема",
        [EDictionaryKey.Language]: "Русский",
        [EDictionaryKey.Marketplace]: "Каталог",
        [EDictionaryKey.Cart]: "Корзина",
        [EDictionaryKey.Orders]: "Заказы",
        [EDictionaryKey.Market]: "Зона",
        [EDictionaryKey.Brand]: "Бренд",
        [EDictionaryKey.Category]: "Категория",
        [EDictionaryKey.Stock]: "В наличии",
        [EDictionaryKey.MyProducts]: "Мои продукты",
        [EDictionaryKey.Search]: "Поиск",
        [EDictionaryKey.FilterByMarket]: "Фильтрация по зоне",
        [EDictionaryKey.FilterByCategory]: "Фильтрация по категории",
        [EDictionaryKey.FilterByBrand]: "Фильтрация по бренду",
        [EDictionaryKey.Product]: "Продукт",
        [EDictionaryKey.MinPrice]: "Мин. цена",
        [EDictionaryKey.English]: "Английский",
        [EDictionaryKey.Russian]: "Руссий",
        [EDictionaryKey.WelcomeBack]: "С возвращением",
        [EDictionaryKey.SignIn]: "Войти",
        [EDictionaryKey.SignUp]: "Зарегистрироваться",
        [EDictionaryKey.AlreadyHaveAnAccount]: "Уже зарегистрированы?",
        [EDictionaryKey.NewToTradeArena]: "Впервые на Trade Arena?",
        [EDictionaryKey.GetStarted]: "Зарегистрироваться",
        [EDictionaryKey.EmailAddress]: "Email адрес",
        [EDictionaryKey.TelegramNickname]: "Telegram @nickname",
        [EDictionaryKey.Password]: "Пароль",
        [EDictionaryKey.PasswordConfirmation]: "Подтверждение пароля",
        [EDictionaryKey.UserName]: "Имя пользователя",
        [EDictionaryKey.RegistrationSuccessful]: "Ваша заявка принята, ожидайте подтверждения регистрации!",
        [EDictionaryKey.PricePerItem]: "Цена за единицу товара",
        [EDictionaryKey.Total]: "Итого",
        [EDictionaryKey.ReminderNote]: "*При условии , что цены на товары указаны в рублях (RUB) для вашего удобства, все транзакции будут осуществляться в долларах США (USD). $1 USD =",
        [EDictionaryKey.Cancel]: "Отмена",
        [EDictionaryKey.PlaceOrder]: "Оформить заказ",
        [EDictionaryKey.AvailableAndMinOrder]: "в наличии, мин. заказ",
        [EDictionaryKey.Rub]: "РУБ",
        [EDictionaryKey.OfferTableBuy]: "Куп.",
        [EDictionaryKey.EnterYourName]: "Введите ваше имя",
        [EDictionaryKey.EnterYourEmail]: "Введите ваш email",
        [EDictionaryKey.InStock]: "Наличие",
        [EDictionaryKey.Report]: "Отчеты",
        [EDictionaryKey.Created]: "Создано",
        [EDictionaryKey.Order]: "Заказ #",
        [EDictionaryKey.Stage]: "Этап",
        [EDictionaryKey.ShipDate]: "Дост.",
        [EDictionaryKey.QTY]: "Кол.",
        [EDictionaryKey.OrderSummary]: "Итог",
        [EDictionaryKey.Price]: "Цена",
        [EDictionaryKey.CountNumber]: "#",
        [EDictionaryKey.Delivery]: "Доставка",
        [EDictionaryKey.Offers]: "Предложения",
        [EDictionaryKey.Quantity]: "Количество",
        [EDictionaryKey.Purchases]: "Покупки",
        [EDictionaryKey.NoPurchasesYet]: "Нет покупок",
        [EDictionaryKey.NoPricesYet]: "Нет доступных цен",
    }
};