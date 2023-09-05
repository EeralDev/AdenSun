// IAddress
export interface IAddress {
    AdressID: number;
    StreetNumber?: number | null;
    StreetName: string;
    AdressLine: string;
    ZipCode: number;
    City: string;
    RegionID: number;
    RegionName: string;
    DepartmentID: number;
    DepartmentName: string;
}

// IDiscount
export interface IDiscount {
    Discount_ID: number;
    Code: string;
    Description: string;
    Amount: number;
    CreationDate: Date;
    ExpirationDate?: Date | null;
    IsActive: boolean;
    IsGlobal: boolean;
    CategoryID?: number | null;
}

// ICategory
export interface ICategory {
    CategoryID: number;
    Name: string;
    ParentID?: number | null;
}

// IReview
export interface IReview {
    UserReviewID: number;
    Description: string;
    Rating: number;
    OrderItemID: number;
    UserID: number;
    UserMail: string;
}

// IItem
export interface IItem {
    Item_ID: number;
    Name: string;
    Price: number;
    Brand: string;
    Description: string;
    Quantity: number;
    Image: string;
    Image2: string;
    Image3: string;
    CatchPhrase: string;
    SKU: string;
    Categories: ICategory[][];
    Discounts: IDiscount[];
    Reviews: IReview[];
}

// IShoppingCartItem
export interface IShoppingCartItem {
    ShoppingCartItemID: number;
    ShoppingCartID: number;
    Quantity: number;
    Item: IItem;
}

// IShoppingCart
export interface IShoppingCart {
    ShoppingCartID: number;
    UserID: number;
    Total?: number | null;
    CreationDate: Date;
    LastUpdate?: Date | null;
    ShoppingCartItems: IShoppingCartItem[];
}

// IOrderItem
export interface IOrderItem {
    OrderItemID: number;
    Quantity: number;
    OrderID: number;
    Item: IItem;
    Reviews: IReview[];
}

// IOrder
export interface IOrder {
    OrderID: number;
    CreationDate: Date;
    IsValid: boolean;
    ValidationDate?: Date | null;
    Total?: number | null;
    DeliveryID?: number | null;
    UserID: number;
    Delivery: IDelivery | null;
    OrderItems: IOrderItem[];
}

// IDelivery
export interface IDelivery {
    DeliveryID: number;
    StartDate: Date;
    Sender: string;
    TrackingNumber: number;
    IsReceived: boolean;
    Price: number;
    OrderID: number;
}

// IUser
export interface IUser {
    UserID: number;
    Mail: string;
    IsProfessional: boolean;
    PhoneNumber: string;
    CreatedDate: Date;
    Adress: IAddress;
    ShoppingCart: IShoppingCart[];
}

export type myUserContextType =
    {
        user: IUser | null,
        token: string | null
        LogIn: (user: IUser) => void;
        LogOut: () => void;
        UpdateUser: (user: IUser) => void;
        AddShoppingCart: (shoppingCartID: number) => void;
        AddItemToShoppingCart: (shoppingCartID: number, shoppingCartItemID: number, Quantity: number, item: IItem) => void;
        UpdateShoppingCartItemQuantity: (shoppingCartId: number, shoppingCartItemID: number, quantity: number) => void;
        RemoveItemFromShoppingCart: (shoppingCartItem: IShoppingCartItem) => void;
    }