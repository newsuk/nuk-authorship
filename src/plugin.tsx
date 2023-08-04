import { ReactElement } from 'react';

import { PluginPostStatusInfo } from '@wordpress/edit-post';

import AuthorsSelect from './components/AuthorsSelect';

export const name = 'authorship';

export const settings = {
	icon: 'welcome-learn-more',
	render(): ReactElement {
		return (
			<PluginPostStatusInfo>
				<AuthorsSelect />
			</PluginPostStatusInfo>
		);
	},
};
