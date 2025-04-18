'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FetchAPI() {

    const init = {
        "login": "trinnapat",
        "id": 33856114,
        "node_id": "MDQ6VXNlcjMzODU2MTE0",
        "avatar_url": "https://avatars.githubusercontent.com/u/33856114?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/trinnapat",
        "html_url": "https://github.com/trinnapat",
        "followers_url": "https://api.github.com/users/trinnapat/followers",
        "following_url": "https://api.github.com/users/trinnapat/following{/other_user}",
        "gists_url": "https://api.github.com/users/trinnapat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/trinnapat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/trinnapat/subscriptions",
        "organizations_url": "https://api.github.com/users/trinnapat/orgs",
        "repos_url": "https://api.github.com/users/trinnapat/repos",
        "events_url": "https://api.github.com/users/trinnapat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/trinnapat/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 1,
        "public_gists": 0,
        "followers": 0,
        "following": 3,
        "created_at": "2017-11-21T06:00:51Z",
        "updated_at": "2025-03-21T11:46:44Z"
    }

    const [name, setName] = useState('Trinnapat')
    const [profile, setProfile] = useState({})


    const fetchAPI = async () => {
        const data = await fetch(`https://api.github.com/users/Trinnapat`)
        const profile = await data.json()
        setProfile(profile)
    }

    return (
        <div>
            <h2>Fetch API</h2>
            <div>{
                JSON.stringify(profile)}</div>
            <hr /><br />
            <div className='flex items-center gap-4 m-4 border border-gray-300 p-4 rounded-lg'>
                <div>
                    <Image
                        className="rounded-full"
                        src={profile.avatar_url}
                        alt="Avatar"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <div>
                        Login: {profile.login}
                    </div>
                    <div>
                        id: {profile.id}
                    </div>
                    <div>
                        <input
                            className='border border-gray-300 rounded mt-2 mr-2'
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            onClick={fetchAPI}
                            className='border px-2'
                        >Update</button>
                    </div>
                </div>



            </div>
        </div>)
}