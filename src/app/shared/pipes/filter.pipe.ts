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

		if (category.name.toLowerCase().includes(query.toLowerCase())) {
			return category;
		}
		if (category.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))) {
			return category;
		}

		return null;
	}
}
