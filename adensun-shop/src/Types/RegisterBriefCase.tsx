export interface INewUser
{
    Mail: string|null,
    IsProfessional: boolean|null,
    PhoneNumber: number | null,
    CreatedDate: Date | null,
    Adress: INewAdrress | null
}


export interface INewAdrress
{
    StreetNumber: number | null, 
    StreetName:  string | null, 
    AdressLine: string | null,
    ZipCode: string | null,
    City: string | null, 
    RegionID: number | null,
    DepartmentID:number|null
}


export interface IRegisterBriefCase {
    NewUser: INewUser,
    Password:string
}