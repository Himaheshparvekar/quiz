import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector'
@Injectable()
export class ApiService
{
    constructor(private http: HttpClient){}

    postQuestion(question)
    {
    this.http.post('https://localhost:44329/api/questions',question).subscribe(res=> 
    {
        console.log(res);
    })
    }

    getQuestions()
    {
    return this.http.get('https://localhost:44329/api/questions')
    }



}