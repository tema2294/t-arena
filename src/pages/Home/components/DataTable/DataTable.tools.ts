import {IEmptyStatusProps} from "./DataTable.types";

export const getEmptyStatusProps = ({isInitialDataEmpty, isFilteredDataEmpty}: {
    isInitialDataEmpty: boolean,
    isFilteredDataEmpty: boolean
}): IEmptyStatusProps => {
    switch (true) {
        case isInitialDataEmpty: {
            return {
                iconName: 'NoProductAvailable',
                title: 'No products available to browse',
                subtitleFunction: (searchQuery: string) => `The markets are currently closed. Please check back later for available products.`
            }
        }
        case isFilteredDataEmpty: {
            return {
                iconName: 'NoProductFound',
                title: 'No products found',
                subtitleFunction: (searchQuery: string) => `Your search “${searchQuery}” didn’t mutch any products. Try changing the filters or search term`
            }
        }
        default: {
            return {} as IEmptyStatusProps
        }
    }
}