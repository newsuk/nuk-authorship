/** Some Gutenberg packages have worse type definitions than the DefinitelyTyped ones, so we need to force ts to use those ones
 */

declare module '@wordpress/compose' {
	export * from '@types/wordpress__compose';
}

declare module '@wordpress/data' {
	export * from '@types/wordpress__data';
}

declare module 'lodash';
