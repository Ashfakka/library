import { Injectable, ViewContainerRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApicallService {
    public loading = false;
    public apiHeaderToken;
    constructor(
        public http: Http,
    ) {}

    /**
     * @desc Http service call for GET method
     * @param {string} apiUrl api url
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doGetAPIAction(apiUrl, successCallback, failureCallback) {
        this.http
            .get(apiUrl)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }


    /**
     * @desc Http service call for POST method
     * @param {string} apiUrl api url
     * @param {Object} data the data to be posted to the api
     * @param {function} successCallback success callback
     * @param {function} failureCallback failure callback
     **/
    doPostAPIAction(apiUrl, data, successCallback, failureCallback) {
        this.http
            .post(apiUrl, data)
            .subscribe(response => {
                successCallback(response);
            }, error => {
                failureCallback(error);
            }
        );
    }
}
