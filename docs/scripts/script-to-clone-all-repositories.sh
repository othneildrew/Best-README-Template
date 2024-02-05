#!/bin/bash

chmod +x script-to-clone-all-repositories.sh

repositories=$(curl -s https://api.github.com/users/heviane/repos | awk '/ssh_url/{print $2}' | sed 's/^"//g' | sed 's/",$//g')
        
for repository in $repositories
do 
	git clone $repository
done

