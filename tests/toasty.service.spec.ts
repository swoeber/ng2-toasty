import { inject, TestBed }
    from '@angular/core/testing';

import {Observable} from 'rxjs';

import {ToastyService, ToastData, ToastOptions, ToastyConfig, ToastyEvent} from '../src/toasty.service';

describe('ToastyService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToastyService, ToastyConfig]
        });
    });

    it('is defined',
        inject([ToastyService], (service:ToastyService) => {
            expect(ToastyService).toBeDefined();
            expect(service instanceof ToastyService).toBeTruthy();
        })
    );

    it('should return Observable from getToasts method',
        inject([ToastyService], (service:ToastyService) => {
            expect(service.events instanceof Observable);
        })
    );

    describe('create default toasty', () => {

        it('with string title',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.default('Hi');
            })
        );

        it('with number title',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('1000');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.default(1000);
            })
        );

        it('with ToastyOptions',
            inject([ToastyService], (service:ToastyService) => {
                // Create options
                var options:ToastOptions = {
                    title: 'Title',
                    msg: 'message',
                };
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe(options.title);
                    expect(toast.msg).toBe(options.msg);
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.default(options);
            })
        );

        it('and call onAdd function',
            inject([ToastyService], (service:ToastyService) => {
                // Create options
                var options:ToastOptions = {
                    title: 'Title',
                    msg: 'message',
                    onAdd: (toast:ToastData) => {
                        expect(toast).toBeDefined();
                        expect(toast.id).not.toBeNull();
                        expect(toast.title).toBe(options.title);
                        expect(toast.msg).toBe(options.msg);
                        expect(toast.showClose).toBe(true);
                        expect(toast.type).toBe('toasty-type-default');
                        expect(toast.theme).toBe('toasty-theme-default');
                        expect(toast.onAdd).not.toBeNull();
                        expect(toast.onRemove).toBeNull();
                    }
                };
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {});
                service.default(options);
            })
        );
    });


    describe('create toasty', () => {
        it('of info type',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-info');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.info('Hi');
            })
        );

        it('of success type',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-success');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.success('Hi');
            })
        );

        it('of wait type',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-wait');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.wait('Hi');
            })
        );

        it('of error type',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-error');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.error('Hi');
            })
        );

        it('of warning type',
            inject([ToastyService], (service:ToastyService) => {
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe('Hi');
                    expect(toast.msg).not.toBeDefined();
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-warning');
                    expect(toast.theme).toBe('toasty-theme-default');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.warning('Hi');
            })
        );
    });

    describe('create toasty', () => {
        it('of material theme',
            inject([ToastyService], (service:ToastyService) => {
                var options:ToastOptions = {
                    title: 'Title',
                    msg: 'message',
                    theme: 'material'
                };
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe(options.title);
                    expect(toast.msg).toBe(options.msg);
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-material');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.default(options);
            })
        );

        it('of bootstrap theme',
            inject([ToastyService], (service:ToastyService) => {
                var options:ToastOptions = {
                    title: 'Title',
                    msg: 'message',
                    theme: 'bootstrap'
                };
                // We listen our service to recieve new toasts from it
                service.events.subscribe((event: ToastyEvent) => {
                    let toast:ToastData = event.value;
                    expect(toast).not.toBeNull();
                    expect(toast.id).not.toBeNull();
                    expect(toast.title).toBe(options.title);
                    expect(toast.msg).toBe(options.msg);
                    expect(toast.showClose).toBe(true);
                    expect(toast.type).toBe('toasty-type-default');
                    expect(toast.theme).toBe('toasty-theme-bootstrap');
                    expect(toast.onAdd).toBeNull();
                    expect(toast.onRemove).toBeNull();
                });
                service.default(options);
            })
        );
    });
});
