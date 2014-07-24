#!/bin/bash
# Update the gh-pages branch to include content from
# the gh-pages folder.

# Dependcies: `awk` and `git`, must be run on a Unix system.

cd "$(dirname $0)";
parent_sha=$(git show-ref -s refs/heads/gh-pages)
echo $parent_sha
doc_sha=$(git ls-tree -d HEAD styleguide | awk '{print $3}')
echo $doc_sha
new_commit=$(echo "Auto-update docs." | git commit-tree $doc_sha -p $parent_sha)
echo $new_commit
echo git update-ref refs/heads/gh-pages $new_commit
git update-ref refs/heads/gh-pages $new_commit
echo git push origin gh-pages
git push origin gh-pages
exit;
