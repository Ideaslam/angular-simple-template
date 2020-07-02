export class SearchResult<T> {
    public Result:T[];
    public TotalCount:number;
    public State:ResponseState;
    public ValidationErrors:ValidationError[];
}

export class ExecutionResponse<T>
{
    public Result:T;
    public State: ResponseState;
    public Message: any;
    public ValidationErrors:ValidationError[];
}

export enum ResponseState{
    Success=100,
    ValidationError=101
}


export class ValidationError{
    public Code:string;
    public Message:string;
    public MessagePlus?:string;
    public Property?:string;
    public static getKeys(){
        return ['Code','Message','MessagePlus','Property'];
    }
}



