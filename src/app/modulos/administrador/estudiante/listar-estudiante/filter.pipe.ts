import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {


    const resultadoEstu : string[] = [];
    for(const aux of value){
      if(aux.es_apellido.indexOf(arg) > -1){
        resultadoEstu.push(aux);
      };
    };
    return resultadoEstu;
  }
}
