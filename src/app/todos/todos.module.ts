import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    },
];

@NgModule({
    declarations: [TodosComponent, HeaderComponent],
    imports: [RouterModule.forChild(routes), ReactiveFormsModule],
    providers: [],
})
export class TodosModule {}
