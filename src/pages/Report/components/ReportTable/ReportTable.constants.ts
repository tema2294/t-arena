import {EDictionaryKey} from "hocs/Localization";

export const FAKE_DATA = [
    {
        "Created": "10:54",
        "Market": "UAE",
        "Product": "Apple AirPods Max with Light Green Headband Green, JP",
        "QTY": 40,
        "Total": "546,021 $",
        "Price": '1,478 $',
    },
    {
        "Created": "10:44",
        "Market": "STOCK",
        "Product": "Apple AirPods Max with Light Green Headband Green, JP",
        "QTY": 30,
        "Total": "546,021 $",
        "Price": '1,478 $',
    },
    {
        "Created": "10:32",
        "Market": "WRHS",
        "Product": "Apple AirPods Max with Light Green Headband Green, JP",
        "QTY": 29,
        "Total": "546,021 $",
        "Price": '1,478 $',
    },
    {
        "Created": "10:11",
        "Market": "UAE",
        "Product": "Apple AirPods Max with Light Green Headband Green, JP",
        "QTY": 21,
        "Total": "546,021 $",
        "Price": '1,478 $',
    },

];


export const COLUMNS_DICT_KEY = [EDictionaryKey.Created, EDictionaryKey.Market, EDictionaryKey.Product, EDictionaryKey.QTY, EDictionaryKey.Price, EDictionaryKey.Total];
export const HEADER_CELLS_RIGHT_ALIGN: Record<string, boolean> = {
    3: true, 4: true, 5: true
};
export const COLUMN_WIDTHS = ['11.2%', '11.2%', '50.09%', '5.11%', '11.2%', '11.2%'];
