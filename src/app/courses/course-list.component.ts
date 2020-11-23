import { Component, OnInit } from '@angular/core';
import { Course } from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourselistComponent implements OnInit {

    course: Course[] = [];

    ngOnInit(): void {
        this.course = [{
            id: 1,
            nome: 'JavaSript',
            imageUrl: '',
            price: 100.99,
            code: 'XPTO-99',
            duration: '5h',
            rating: 5.4,
            releaseDate: 'Jan'
        },
        {
            id: 2,
            nome: 'C#.Completo',
            imageUrl: '',
            price: 100.99,
            code: 'CSharp-99',
            duration: '26h',
            rating: 9.9,
            releaseDate:'Nov'
        }]

    }




}