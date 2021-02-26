git add .

echo 'Enter the commit message:'
read commitMessage

git commit -m "$commitMessage"

# echo 'Where to send this ? [ origin | umbler ]'
# read branch

# git push "$branch" master
git push origin main

exit

 