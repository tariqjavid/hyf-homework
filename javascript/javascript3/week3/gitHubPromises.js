
const benna100_Url='https://api.github.com/search/repositories?q=user:benna100'
const tariqjavid_Url='https://api.github.com/search/repositories?q=user:tariqjavid'
const mogenshoj_Url='https://api.github.com/search/repositories?q=user:mogenshoj'

const  pTag=document.getElementById('pTag')
classMatesRepositories=()=>
{
    const repo1=fetch(benna100_Url);
    const repo2=fetch(tariqjavid_Url);
    const repo3=fetch(mogenshoj_Url);

Promise.all([repo1,repo2,repo3]).then(json=>{
    
    const repo1_response= json[0].json();
    const repo2_response= json[1].json();
    const repo3_response= json[2].json();
    return Promise.all([repo1_response, repo2_response,repo3_response])
}).then(res=>{
     console.log(res)
     const result=res.map(x=>x.items)

result.forEach(data => {  const output=`<ul>
<li>Name of Url:${data[0].owner.repos_url}</li>
<li>Name of repo${data[0].name}</li>
<li>Owner of repo:${data[0].owner.login}</li>

</ul>`
 pTag.innerHTML+=output;
    
});
})
}

classMatesRepositories();


