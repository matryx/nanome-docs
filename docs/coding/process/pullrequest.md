
# How to: Pull Requests

*(and maybe get rejected)*

## Introduction

This document describes a process that is still highly experimental and could lead to hate between people, rage and potential human casualties. We cannot be responsible for any problem of this kind that might occur during a code review.

More seriously, don’t hesitate to send me any comment if this PR process doesn’t work for you or if you see any way to improve it.

## The process

1. *Requester*: Write the PR with the tag **[QA]** and submit it.  
Reviewers should be Vincent, Jeremie and at least another person (not always the same)
2. *Requester*: Click “**Stop Watching**”
-----------
3. *Reviewer*: **Checkout** the branch and test the feature, try to break it (take a look at the code to find weaknesses)
4. *Reviewer*: Write **comments**. When the comment is a task to do, click “**Create Task**” under the comment.
5. *Reviewer*: Once done with your code review and tests, finish by writing a comment “**@[author] Done**”.  
**Approve** or **Reject** if needed
6. *Reviewer*: Click “**Stop Watching**”
----------
7. *Requester*: Once all reviewers are done.  
If work needed, change the tag to **[IP]**. When done, **redo all steps above**. Write a **comment mentioning all reviewers** so they get a notification.
8. *Requester*: Repeat until PR is **approved** by Vincent AND Jeremie
9. *Requester*: **Merge**

## As a requester

### Make smaller pull requests

Try to submit small pull requests with a precise purpose. Nobody wants to review a PR of 300+ files. If your PR evolved, try separating it in another branch, with git cherry-pick for example.

### Write useful descriptions and titles

Explain the purpose of the PR, don’t consider that your reviewer knows exactly what it’s all about. Especially since we’re likely to have more and more PRs in the future.

Consider providing a one sentence explanation of why the work is taking place.

If you’re expecting a specific kind of feedback, say it: architecture question, style, extra tests...

### Have meaningful commit messages

Yeah, I know, I also write messages like “A”, “Blabla”, “JKFDBkhbfhjs”. But let’s try to avoid them.

Also, keep git history short, for example with rebase (but be careful): http://blog.izs.me/post/37650663670/git-rebase

### Add comments to your PR to help the reviewer

Before adding a reviewer (so you don’t spam others), don’t hesitate to write a few comments on what might be harder to understand, to guide the reviewers. Also, you can write specific questions directly in the code.

### Add screenshots

If the feature has some graphic output, it’s always good to add screenshots to your PR, makes it easier to know what to expect.

### Ask for clarification

If a reviewer’s comment is unclear, don’t hesitate to ask for more explanation.

### Try to reply to every comment that is not a task

If a comment is not a task, you should always reply to it, so no comment is forgotten.  
If it’s a task, just mark it as completed once you did it.

### Use tasks

When a comment is something to do, create a task under it (if the reviewer didn’t do it because he’s too lazy)
You’ll then see a “X open task” button under “Start/Stop Watching”. If you click on it, you will see all the remaining tasks before creating a new iteration of the PR.

### Merges must be approved

If you have merge conflicts, they should be approved once resolved, before you merge your branch back in the main branch. Try however to have one specific commit dedicated to the merge conflicts resolution, so it’s easy to see what is coming from the main branch and what are your actual changes.

## As a reviewer ##

As a reviewer, you have a lot of responsibilities. Just by looking at the code, you need to be able to detect possible problems. Thanks to code reviews, the code is cleaner, more efficient and reliable.

It may be hard but it allows all team members to be involved in parts they don’t always know and to discover other styles of coding.

### If you disagree strongly, consider giving it a few minutes before responding

Think before you react, and always consider other possibilities than what you were thinking.

### Explain your reasons why code should be changed

Is it  because of style, is it a personal preference, is it just plain wrong and going to crash?

### Offer ways to simplify or improve code

When looking at the code, always ask yourself if the code could be rewritten in a better way, more simple or more optimized.

### Checkout the branch and test

Always test the code, make sure you can’t crash it, it works and there is no regression.

### Add yourself in reviewers if you test

If you’re taking a look at a PR where you were not initially, you should add yourself as a reviewer and look at the code.

### Have a quick look at the code before testing

Always good to get a rough idea of what could go wrong.

### Go line-by-line...

Are there style guide violations? Strangely named variables? Magic numbers? Do the abstractions make sense to you? Are things arranged in a testable way?

### ...Then take a look at the big picture

Then, read the code again and try to think: Could these lines create any unwanted side effect somewhere? Is this variable always initialized properly? Are we deep in the call stack? (if yes, a big loop could slow down the app)

### Are there tests implemented?

Are they there? If a new function was added does it have tests? Do the tests, well, TEST anything? Do they just run the function or do they properly check the output? 

### Don’t reject immediately

Except if agreed with author, never reject the PR before doing a few iterations on it.