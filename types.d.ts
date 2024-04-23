type Result = {
    pageid:string,
    title:string,
    extract:string,
    thumbnail?:{
        source:srting
        width:number
        height:number
    }
}

type SearchResult = {
    query?:{
        pages?:Result[]
    }
}