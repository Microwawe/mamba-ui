import {
	ApplicationRef,
	ComponentFactoryResolver,
	ComponentRef,
	EmbeddedViewRef,
	Injectable,
	Injector,
	Type,
} from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ModalService<T> {
	private componentRef: ComponentRef<T> | undefined;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector
	) {}

	async open(component: Type<T>, content: string): Promise<void> {
		if (this.componentRef) {
			return;
		}

		this.componentRef = this.componentFactoryResolver
			.resolveComponentFactory<T>(component)
			.create(this.injector);
		this.appRef.attachView(this.componentRef.hostView);

		const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
			.rootNodes[0] as HTMLElement;
		domElem.innerHTML = content;
		document.body.appendChild(domElem);
	}

	async close(): Promise<void> {
		if (!this.componentRef) {
			return;
		}

		this.appRef.detachView(this.componentRef.hostView);
		this.componentRef.destroy();

		this.componentRef = undefined;
	}
}
