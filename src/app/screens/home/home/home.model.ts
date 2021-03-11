export interface UserModel {
    address: AddressModel;
    company: CompanyModel;
    email: string
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface AddressModel {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export interface CompanyModel {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}