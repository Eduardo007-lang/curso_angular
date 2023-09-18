
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importando os components para criacao de rota
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { ItemDetailsComponent } from './components/item-details/item-details.component';

//Definicao de rotas
const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailsComponent},

    {path: 'eventos', component: EventosComponent},
    {path: 'change-number', component: ChangeNumberComponent},
    {path: 'directives', component: DirectivesComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}