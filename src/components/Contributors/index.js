import React, { useEffect, useState } from 'react'

import { github } from '../../services/github';
import { filterRepositoriesNames } from '../../util/util';

import {
	ContributorsContainer,
} from './style'

export function Contributors() {
	const [hocoContributors, setHocoContributors] = useState({});

	useEffect(() => {
		async function searchContributors() {
			let repositories = localStorage.getItem('@HoCo/repositories');
			if (!repositories) {
				repositories = await github.getAllRepositoriesFromOrganization();
				localStorage.setItem('@HoCo/repositories', JSON.stringify(repositories));
			} else {
				repositories = JSON.parse(repositories);
			}

			let contributors = localStorage.getItem('@HoCo/contributors');
			if (!contributors) {
				const hocoRepositories = filterRepositoriesNames(repositories);
				contributors = await github.getAllHocoContributors(hocoRepositories);
				localStorage.setItem('@HoCo/contributors', JSON.stringify(contributors));
			} else {
				contributors = JSON.parse(contributors);
			}

			setHocoContributors(contributors);
		}

		searchContributors();
	}, []);

	return (
		<ContributorsContainer>
			{Object.values(hocoContributors).map((contributorInfo, index) => {
				return (
					<a
						href={contributorInfo.profileUrl}
						target="_blank"
						rel="noreferrer"
						key={index}
					>
						<img src={contributorInfo.imageUrl} alt="" />
					</a>
				);
			})}
		</ContributorsContainer>
	);
}

