import { Component, OnInit } from '@angular/core';
import {Course} from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = 
        [
            {
                id: 1,
                nome: 'Qualuqer',
                imageUrl: '',
                price: 9,
                code: '98df',
                duration: 120,
                rating: 5,
                releaseDate: 'Dez'
            },
            {
                id: 2,
                nome: 'Qualuqer',
                imageUrl: '',
                price: 9,
                code: '98df',
                duration: 120,
                rating: 5,
                releaseDate: 'Dez'

            }
        ]

    }

}