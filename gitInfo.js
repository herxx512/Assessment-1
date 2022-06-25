/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a program and a version control system that helps manage and keep track of changes to software code projects.'
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is a website that is a cloud service where you can upload and download git repositories.'
console.log(gitHubDefinition)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const getInitDefinition = 'git init will create and initialize a local repository in the current folder that you are in (through the terminal).'
console.log(getInitDefinition)

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = 'git clone will create a copy of the targeted existing repository.'
console.log(gitCloneDefinition)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = 'git status will show the status of the current repository. The status will show what changes have or what haven\'t been staged.'
console.log(gitStatusDefinition)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = 'git add will add the files in the current folder to be tracked.'
console.log(gitAddDefinition)

const gitAddCode = 'git add .'
console.log(gitAddCode)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = 'git commit will take a snapshot of the current files that are being tracked.'
console.log(gitCommitDefinition)

const gitCommitCode = 'git commit -m "initial commit"'
console.log(gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = 'git push will upload the repository contents (all the files in the current targeted folder that has the git repository) onto GitHub (or other remote repository).'
console.log(gitPushDefinition)
