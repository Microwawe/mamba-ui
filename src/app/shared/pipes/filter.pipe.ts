import {Pipe, PipeTransform} from '@angular/core';
import {Category} from '@shared/interfaces/category.interface';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {
	transform(category: Category, query?: string): Category | null {
		if (!query) {
			return category;
		}

		return category.name.toLowerCase().includes(query.toLowerCase()) ? category : null;
	}
}
