import {Component} from '@angular/core';

import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-table4',
	templateUrl: './table4.component.html',
})
export class Table4Component extends BaseComponent {
	rows = [
		{
			'name': 'Tracy Kim',
			'message':
				'An cum minimum voluptua repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.',
			'date': '5min ago',
		},
		{
			'name': 'Katherine Rojas',
			'message':
				'At nam diceret intellegam, diam delicatissimi eu nam. Vivendo adolescens dissentiet cum ex, fuisset percipit eum ne. Unum officiis invenire vix ex.',
			'date': '37min ago',
		},
		{
			'name': 'Santiago Mcguire',
			'message':
				'Quis graeci ex mea. Sed ea odio similique. Enim porro persius et usu, et sea partem melius sententiae, mea viderer fuisset id.',
			'date': '1h ago',
		},
		{
			'name': 'Keaton Collins',
			'message':
				'Vix an ullum fuisset, ad nominati intellegat signiferumque qui, vidit dolores rationibus id est. Quo ei assum option, ludus invenire dignissim et mea.',
			'date': '3h ago',
		},
		{
			'name': 'Ana Stevenson',
			'message':
				'Vis sanctus gubergren abhorreant ea, eu melius percipit legendos mei, vulputate temporibus qui ut. Eu eam sumo putent discere, id vim feugiat lobortis democritum, fabellas invidunt mnesarchum at duo.',
			'date': '8h ago',
		},
		{
			'name': 'Elliott Mejia',
			'message':
				'Pri habeo eligendi at, ex quidam probatus sed, ei cum mentitum mnesarchum. Ex est purto congue. Unum soluta tritani in eam, habemus percipit vim an. Duo ad tota voluptaria dissentias, an eum bonorum maiestatis, alia habeo imperdiet ex vix.',
			'date': 'yesterday',
		},
		{
			'name': 'Riley Nunez',
			'message':
				'Con no error impedit definitionem, qui sanctus detraxit vulputate id. Et natum eligendi moderatius vis. Pro ea mazim nominati delicata, per ad melius vituperatoribus. Ad dolor signiferumque nam, eam justo adipisci argumentum ut.',
			'date': '2 days ago',
		},
		{
			'name': 'Garret Ramsey',
			'message':
				'Justo homero similique eu his, oratio libris et vix. Eu eruditi conceptam cum, ius id cibo impetus consectetuer, lorem everti contentiones pri ne. Aperiam utroque pri ex, eu sit quodsi quaestio persecuti. ',
			'date': '4 days ago',
		},
		{
			'name': 'Brittney Hill',
			'message':
				'Eu nemore apeirian menandri mea, maiestatis assueverit sit an. Vel deserunt voluptaria reprimique ex, deserunt adversarium ad his, usu nibh legimus fierent in.',
			'date': '5 days ago',
		},
		{
			'name': 'Kendall Valdez',
			'message':
				'Ea mea ornatus menandri lobortis. Meis eripuit disputationi usu in, at vix possim conceptam, ne deleniti corrumpit quo. No usu sint praesent, cu eos iusto mollis, ad saepe praesent has. ',
			'date': '1 week ago',
		},
		{
			'name': 'Gabrielle Shelton',
			'message':
				'Sed no mazim indoctum, labores mediocrem no vel. Quo no velit aperiam urbanitas, ea est noster impedit. Ius no exerci vivendo nominavi, an mel paulo dolorum. Sit et quaeque dolorum pertinax.',
			'date': '1 week ago',
		},
		{
			'name': 'Kameron Waters',
			'message':
				'No vel voluptua corrumpit, vim iudico ceteros imperdiet ex. An sea commune mediocrem, alii paulo ridens pro at, veri erant prompta id his.',
			'date': '2 weeks ago',
		},
	];
	constructor() {
		super();
	}
}
