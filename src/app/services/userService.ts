import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { throwError,Observable, Subject } from 'rxjs';
import { IPagination } from '../models/IPagination';
import { environment } from 'src/environments/environment';
import { catchError , tap} from 'rxjs/operators';
import { Cacheable} from 'ngx-cacheable/cacheable.decorator';

const userNotifier = new Subject();
 
@Injectable({
    providedIn:'root'
})

export class UserService {

    constructor(private http:HttpClient){}

    @Cacheable ({
        cacheBusterObserver:userNotifier
       })

    getUsers():Observable<IPagination> {
        return this.http.get<IPagination>(environment.serviceUrl+"?per_page=100")
        .pipe(tap(data=>console.log(`All data : ${JSON.stringify(data)}`),
                catchError(this.handleError))
            );
    }

    private handleError(err:HttpErrorResponse) {
        let errorMessage='';
        if(err.error instanceof ErrorEvent)
         errorMessage=`An error occured ${err.error.message} `;
         else 
         errorMessage=`Server returned  code ${err.status},error message is ${err.message}`;
         console.log(errorMessage);
         return throwError(errorMessage);
    }


}