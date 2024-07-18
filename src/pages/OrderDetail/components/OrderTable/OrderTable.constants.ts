import {EDictionaryKey} from "hocs/Localization";

export const FAKE_DATA = [
    {
        "Product": "MacBook Pro 13\" Touch Bar MPXV2LL/A Core i5 3.1Ghz 8GB RAM 256GB SSD",
        "Delivery": "9 Feb 2024",
        "QTY": 378,
        "Price": 729,
        "Total": 546021
    },
    {
        "Product": "Apple iPhone 14 128Gb",
        "Delivery": "9 Feb 2024",
        "QTY": 143,
        "Price": 729,
        "Total": 546021
    },
    {
        "Product": "MacBook Air 13.6\" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD - Midnight",
        "Delivery": "9 Feb 2024",
        "QTY": 15,
        "Price": 729,
        "Total": 546021
    },
    {
        "Product": "Apple iPad 10",
        "Delivery": "9 Feb 2024",
        "QTY": 187,
        "Price": 729,
        "Total": 546021
    },
    {
        "Product": "MacBook Air 13.3\" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray",
        "Delivery": "9 Feb 2024",
        "QTY": 4,
        "Price": 729,
        "Total": 546021
    },
    {
        "Product": "MacBook Pro 13\" Touch Bar MPXV2LL/A Core i5 3.1Ghz 8GB RAM 256GB SSD",
        "Delivery": "9 Feb 2024",
        "QTY": 2,
        "Price": 729,
        "Total": 546021
    }
]


export const COLUMNS_DICT_KEY = [EDictionaryKey.CountNumber, EDictionaryKey.Product, EDictionaryKey.Delivery, EDictionaryKey.QTY, EDictionaryKey.Price, EDictionaryKey.Total];


export const CELLS_MIN_WIDTH: Record<string, number> = {
    0: 26,
}
export const HEADER_CELLS_RIGHT_ALIGN: Record<string, boolean> = {
    3: true, 4: true, 5: true
};

export const CELLS_WITHOUT_RIGHT_PADDING: Record<string, boolean> = {
    0: true
};

export const COLUMN_WIDTHS = ['1.97%', '55.59%', ' 10.61%', '10.61%', '10.61%', '10.61%'];
