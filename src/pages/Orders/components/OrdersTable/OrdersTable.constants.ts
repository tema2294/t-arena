import {EDictionaryKey} from "hocs/Localization";

export const FAKE_DATA = [
    {
        "Created": "18 Dec 2023",
        "Order": "14841",
        "Market": "UAE",
        "Stage": "Pro forma",
        "Ship_date": "09/02",
        "QTY": 729,
        "Total": "546,021 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14842",
        "Market": "UAE",
        "Stage": "Pro forma",
        "Ship_date": "09/02",
        "QTY": 126,
        "Total": "156,344 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14843",
        "Market": "HK",
        "Stage": "Invoice",
        "Ship_date": "09/02",
        "QTY": 19,
        "Total": "11,109 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14844",
        "Market": "STOCK",
        "Stage": "Invoice",
        "Ship_date": "09/02",
        "QTY": 19,
        "Total": "11,109 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14845",
        "Market": "STOCK",
        "Stage": "Invoice",
        "Ship_date": "09/02",
        "QTY": 54,
        "Total": "74,054 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14846",
        "Market": "UAE",
        "Stage": "Invoice",
        "Ship_date": "09/02",
        "QTY": 11,
        "Total": "546,021 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14847",
        "Market": "WRHS",
        "Stage": "Invoice",
        "Ship_date": "09/02",
        "QTY": 162,
        "Total": "546,021 $",
    },
    {
        "Created": "18 Dec 2023",
        "Order": "14848",
        "Market": "UAE",
        "Stage": "Delivered",
        "Ship_date": "09/02",
        "QTY": 45,
        "Total": "546,021 $",
    }
];


export const COLUMNS_DICT_KEY = [EDictionaryKey.Created, EDictionaryKey.Order, EDictionaryKey.Market, EDictionaryKey.Stage, EDictionaryKey.ShipDate, EDictionaryKey.QTY, EDictionaryKey.Total, EDictionaryKey.OrderSummary];

export const HEADER_CELLS_RIGHT_ALIGN: Record<string, boolean> = {
    5: true, 6: true
};

export const COLUMN_WIDTHS = ['13%', '13%', '13%', '13%', '7%', '6%', '13%', '22%'];
