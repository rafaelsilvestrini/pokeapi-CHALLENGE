export interface PokeList {
    name?: string;
    url?: string;
    info?: {
        height?:number;
        weight?:number;
        moves?:[];
        types?: [{
            type?: {
                name?: string
            }
        }]
        id?: string;
        abilities?:[{
            ability?:{
                name?:string
            }
        }];
        stats?:[{
            base_stat?:number
            stat?:{
                name?:string
            }
        }];
        base_experience?:number
    };
    pokemon?: {
        name?: string
        url?: string
    };
}
