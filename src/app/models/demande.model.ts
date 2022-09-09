export interface IDemande{
    id?:string,
    donateur_id:number,
    contenu:string,
    adresse:string,
    category:string,
    title:string,
    resolu:number,
    donateur:any,
    media?:any[],
    created_at?:Date,
    updated_at?:Date,
}