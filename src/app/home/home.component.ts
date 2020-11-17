import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
	test = `<section class="bg-default text-default-inverse py-6">
	<div
		class="container p-10 grid gap-6 auto-rows-fr grid-cols-1 sm:mx-10 md:mx-14 lg:mx-0 lg:grid-cols-2 xl:grid-cols-4"
	>
		<h1 class="col-span-full h-4">Pricing</h1>
		<div class="p-8 flex flex-col items-center border-2 rounded-md">
			<p class="self-start">Personal</p>
			<p class="text-4xl font-bold self-start">FREE</p>
			<ul class="flex-1 self-stretch space-y-2">
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
			</ul>
			<button
				class="text-default-inverse  bg-default-inverse font-semibold btn mt-12"
			>
				Contact
			</button>
		</div>
		<div class="p-6 flex flex-col items-center border-2 rounded-md">
			<p class="self-start">Personal</p>
			<p class="text-4xl font-bold self-start">19€</p>
			<ul class="flex-1 self-stretch space-y-2">
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
				<li class="flex items-center space-x-2">
					<i
						class="text-2xl font-semibold cil-check-alt inline-flex justify-center items-center"
						[ngClass]="primaryText"
					></i>
					<span>Lumet consectetur adipisicing</span>
				</li>
			</ul>
			<button
				class="text-default-inverse  bg-default-inverse font-semibold btn mt-12"
			>
				Contact
			</button>
		</div>
		<div
			class="p-8 flex flex-col items-center border-2 rounded-md"
			[ngClass]="primaryBorder"
		>
			<p class="self-start">Personal</p>
			<p class="text-4xl font-bold">FREE</p>
			<ul class="flex-1 self-stretch">
				<li>x</li>
				<li>x</li>
				<li>x</li>
			</ul>
			<button
				class="text-default-inverse  font-semibold btn mt-12"
				[ngClass]="primaryBackground"
			>
				Contact
			</button>
		</div>
		<div class="p-8 flex flex-col items-center border-2 rounded-md">
			<p class="self-start">Personal</p>
			<p class="text-4xl font-bold">FREE</p>
			<ul class="flex-1 self-stretch">
				<li>x</li>
				<li>x</li>
				<li>x</li>
			</ul>
			<button
				class="text-default-inverse  bg-default-inverse font-semibold btn mt-12"
			>
				Contact
			</button>
		</div>
	</div>
</section>
`;
	constructor() {
		super();
	}

	ngOnInit() {}
}
