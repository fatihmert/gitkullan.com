import React, {Component} from 'react';

import './console.css';

class Console extends Component {
    state = {
        cmdList: [
            {
                name: 'add',
                actions: [
                    {
                        name: 'new changes',
                        samples: [
                            {
                                code: 'git add <file.ext>',
                                note: 'To add all the files in the current directory, use "git add ."\nTo add a directory use "git add <directory>"',
                            }
                        ]
                    },
                    {
                        name: 'a new branch',
                        samples: [
                            {
                                code: 'git branch <new name>\n',
                                note: 'but remain in the current branch I am working from',
                            },
                            {
                                code: 'git checkout -b <new name>\n',
                                note: 'and switch to the new branch',
                            },
                            {
                                code: 'git checkout -b <new name> <another branch>\n',
                                note: 'from another branch',
                            }
                        ]
                    },
                    {
                        name: 'new remote repo',
                        samples: [
                            {
                                code: 'git remote add <shortname> <url>\n',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'alias',
                        samples: [
                            {
                                code: 'git config --global alias.<alias> <command>\n',
                                note: 'e.g. git config --global alias.st status. Typing git st in the terminal now does the same thing as git status',
                            }
                        ]
                    },
                    {
                        name: 'annotated tag',
                        samples: [
                            {
                                code: 'git tag -a v1.4 -m "my version 1.4"\n',
                                note: '',
                            },
                            {
                                code: 'git push --tags\n',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'annotated tag for old commit',
                        samples: [
                            {
                                code: 'git tag -a v1.4 -m "my version 1.4" <commit-hash>\n',
                                note: '',
                            },
                            {
                                code: 'git push --tags\n',
                                note: '',
                            }
                        ]
                    }
                ],
            },
            {
                name: 'clone',
                actions: [
                    {
                        name: 'existing repo into a new directory',
                        samples: [
                            {
                                code: 'git clone <repo-url> <directory>',
                                note: 'The repo is cloned into the specified directory\nReplace "directory" with the directory you want',
                            }
                        ]
                    },
                    {
                        name: 'existing repo into the current directory',
                        samples: [
                            {
                                code: 'git clone <repo-url> <directory> .',
                                note: 'The repo is cloned into the current directory\nThe current directory is represented with a "." (period)\n',
                            }
                        ]
                    },
                    {
                        name: 'existing repo along with submodules into the current directory',
                        samples: [
                            {
                                code: 'git clone --recurse-submodules <repo-url> .',
                                note: 'If git version is under 2.13, use --recursive option instead.\n',
                            }
                        ]
                    },
                    {
                        name: 'submodules after cloning existing repo',
                        samples: [
                            {
                                code: 'git submodule update --init --recursive',
                                note: '',
                            }
                        ]
                    },
                ],
            },
            {
                name: 'commit',
                actions: [
                    {
                        name: 'commit all local changes in tracked files',
                        samples: [
                            {
                                code: 'git commit -a',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'commit all stages changes',
                        samples: [
                            {
                                code: 'git commit -m <message>',
                                note: 'Replace <message> with your commit message.\n',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'compare two commit',
                actions: [
                    {
                        name: 'and output result in the terminal',
                        samples: [
                            {
                                code: 'git diff <sha1> <sha2> | less',
                                note: 'sha1 and sha2 are the sha hash of the commits you want to compare.\n',
                            }
                        ]
                    },
                    {
                        name: 'and output result to a file',
                        samples: [
                            {
                                code: 'git diff <sha1> <sha2> > diff.txt',
                                note: 'sha1 and sha2 are the sha of the commits you want to compare. \ndiff.txt is the file you want to store the contents of the diff\n',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'configure',
                actions: [
                    {
                        name: 'name',
                        samples: [
                            {
                                code: 'git config --global user.name "username" ',
                                note: 'Your username and email address should be the same as the one used with your git hosting provider i.e. github, bitbucket, gitlab etc\n',
                            }
                        ]
                    },
                    {
                        name: 'mail address',
                        samples: [
                            {
                                code: 'git config --global user.email "email address"',
                                note: 'Your username and email address should be the same as the one used with your git hosting provider i.e. github, bitbucket, gitlab etc\n',
                            }
                        ]
                    },
                    {
                        name: 'default editor',
                        samples: [
                            {
                                code: 'git config --global core.editor "vim"',
                                note: 'Change default editor to vim.\n',
                            }
                        ]
                    },
                    {
                        name: 'color',
                        samples: [
                            {
                                code: 'git config --global color.ui auto',
                                note: 'Enables helpful colorization of command line output\n',
                            }
                        ]
                    },
                    {
                        name: 'add the GPG key',
                        samples: [
                            {
                                code: 'git config --global user.signingkey <your-secret-gpg-key>',
                                note: 'Git is cryptographically secure, but it’s not foolproof. If you’re taking work from others on the internet and want to verify that commits are actually from a trusted source, Git has a few ways to sign and verify work using GPG.\n',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'delete/remove',
                actions: [
                    {
                        name: 'a branch',
                        samples: [
                            {
                                code: 'git branch -D <branch name>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'a tag',
                        samples: [
                            {
                                code: 'git tag -d v<tag version>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'remote',
                        samples: [
                            {
                                code: 'git remote rm <remote>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'stash',
                        samples: [
                            {
                                code: 'git stash clear',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'untracked files',
                        samples: [
                            {
                                code: 'git clean -<flag>',
                                note: ['replace -<flag> with:', ' -i for interactive command', ' -n to preview what will be removed', ' -f to remove forcefully', ' -d to remove directories', ' -X to remove ignored files', ' -x to remove ignored and non-ignored files'],
                            }
                        ]
                    },
                    {
                        name: 'files from index',
                        samples: [
                            {
                                code: 'git rm --cached <file or dir>',
                                note: 'Use this option to unstage and remove paths only from the index. Working tree files, whether modified or not, will be left alone.',
                            }
                        ]
                    },
                    {
                        name: 'local branches that don\'t exist at remote',
                        samples: [
                            {
                                code: 'git remote prune <remote-name>',
                                note: 'Use the --dry-run option to report what branches will be pruned, but do not actually prune them',
                            }
                        ]
                    },
                    {
                        name: 'files from old index',
                        samples: [
                            {
                                code: 'git filter-branch --index-filter git rm --cached --ignore-unmatch path/to/mylarge_file --tag-name-filter cat -- --all',
                                note: 'Like the rebasing option described before, filter-branch is rewriting operation. If you have published history, you\'ll have to --force push the new refs.',
                            },
                        ]
                    }
                ]
            },
            {
                name: 'debug',
                actions: [
                    {
                        name: 'binary search',
                        samples: [
                            {
                                code: ['git bisect start', 'git bisect bad', 'git bisect good v2.13'],
                                note: 'Once you have specified at least one bad and one good commit, git bisect selects a commit in the middle of that range of history, checks it out, and outputs something similar..',
                            }
                        ]
                    },
                    {
                        name: 'who modified each lines',
                        samples: [
                            {
                                code: 'git blame -L <number-line-start>,<number-line-end> <filename>',
                                note: 'The -L option will restrict the output to the requested line range',
                            }
                        ]
                    },
                    {
                        name: 'search in files',
                        samples: [
                            {
                                code: 'git grep -n <your_text_or_expression>',
                                note: 'Print lines matching a pattern. Option -n to display the numbering of lines in which there are matches',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'ignore',
                actions: [
                    {
                        name: 'all files in a directory',
                        samples: [
                            {
                                code: '<dir name>/*',
                                note: ['This must be added to .gitignore file',  'Replace "dir name" with name of directory whose files you want git to ignore'],
                            }
                        ]
                    },
                    {
                        name: 'all files of a specific type',
                        samples: [
                            {
                                code: '*.<filename extension>',
                                note: ['This must be added to .gitignore file', 'Replace "filename extension" with the extension of the files you want git to ignore', 'For example *.py tells git to ignore all python files in the repository'],
                            }
                        ]
                    }
                ]
            },
            {
                name: 'initalize',
                actions: [
                    {
                        name: 'a new repo',
                        samples: [
                            {
                                code: 'git init',
                                note: 'Make sure you are in the right directory',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'merge',
                actions: [
                    {
                        name: 'another branch to current branch',
                        samples: [
                            {
                                code: 'git merge <branch-name>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'merge a single file from one branch to another.',
                        samples: [
                            {
                                code: 'git checkout <branch name> <path to file> --patch',
                                note: '',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'modify',
                actions: [
                    {
                        name: 'my last/latest commit message',
                        samples: [
                            {
                                code: 'git commit --amend',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'my last commit but leave the commit message as is',
                        samples: [
                            {
                                code: ['git add . \n', 'git commit --amend --no-edit'],
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'repo\'s remote url',
                        samples: [
                            {
                                code: 'git remote set-url <alias> <url>',
                                note: '<alias> is your remote name e.g origin\n',
                            }
                        ]
                    }
                ]
            },
            {
                name: 'recover',
                actions: [
                    {
                        name: 'show hashes dangling commits after hard reset to previous commit',
                        samples: [
                            {
                                code: 'git reflog',
                                note: 'alternative: git log -g. For recovery use\n' +
                                    'git checkout -b <recovery> <hash>',
                            }
                        ]
                    },
                    {
                        name: 'show hashes removed branch or other git objects',
                        samples: [
                            {
                                code: 'git fsck --full',
                                note: 'show hashes all dangling git objects. For recovery use\n' +
                                    'git checkout -b <recovery> <hash>',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'rename',
                actions: [
                    {
                        name: 'while working in the branch',
                        samples: [
                            {
                                code: 'git branch -m <new name>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'from outside the branch',
                        samples: [
                            {
                                code: 'git branch -m <old name> <new name>',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'file',
                        samples: [
                            {
                                code: 'git mv file_from file_to',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'remote',
                        samples: [
                            {
                                code: 'git remote rename <oldname> <newname>',
                                note: '',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'revert/reset',
                actions: [
                    {
                        name: 'a specific commit',
                        samples: [
                            {
                                code: 'git revert <commit-hash>',
                                note: 'Use git log to see the hash of each commit',
                            }
                        ]
                    },
                    {
                        name: 'a last commit',
                        samples: [
                            {
                                code: 'git reset --hard',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'to last commit on remote branch',
                        samples: [
                            {
                                code: 'git reset --hard <repo>/<branch>',
                                note: '',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'show/view',
                actions: [
                    {
                        name: 'status of project including staged, unstaged and untracked files',
                        samples: [
                            {
                                code: 'git status',
                                note: '',
                            }
                        ]
                    },
                    {
                        name: 'commit logs/history - all',
                        samples: [
                            {
                                code: 'git log',
                                note: 'Type q in the terminal to exit the logs',
                            }
                        ]
                    },
                    {
                        name: 'commit logs/history - for last xxx number of commits',
                        samples: [
                            {
                                code: 'git log -n',
                                note: 'Replace n with number of commits e.g. git log -2',
                            }
                        ]
                    },
                    {
                        name: 'commit logs/history - for last xxx number of commits',
                        samples: [
                            {
                                code: 'git log -n',
                                note: 'Replace n with number of commits e.g. git log -2',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'squash',
                actions: [
                    {
                        name: 'commits in pull request into single commit',
                        samples: [
                            {
                                code: 'git rebase -i <branch name>',
                                note: [
                                    'Make sure that latest commits are fetched from upstream.',
                                    'For example (assuming you have a remote named upstream):',
                                    'git fetch upstream',
                                    'git rebase -i upstream/master',
                                    'Change "pick" to "squash" for the commits you wish to squash and save.',
                                    'git push origin <topic branch> --force-with-lease',
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                name: 'synchronize',
                actions: [
                    {
                        name: 'a branch in a fork',
                        samples: [
                            {
                                code: [
                                    'git fetch <remote-repo>',
                                    'git checkout <branch-name>',
                                    'git merge <remote-repo>/<branch-name>',
                                ],
                                note: 'You need to add a remote repo for your fork first.',
                            }
                        ]
                    }
                ]
            },
        ],
        selectedCommand: 0,
        selectedAction: 0,
    };

    selectCommand(e){
        this.setState({
            selectedCommand: e.target.value
        });
    }

    selectAction(e){
        this.setState({
            selectedAction: e.target.value
        });
    }

    componentDidMount() {
        let consoleDiv = document.getElementsByClassName('console')[0];
        consoleDiv.style.height = document.body.offsetHeight + 'px';
    }

    render() {
        return (
            <section id="command-set">
                <div className="hidden d-none">
                    <div className="group d-flex flex-column-reverse ml-2">
                        <h3 className="m-0"># git hızlı komut seti</h3>
                        <div className="slogan">Tam olarak ne yapmak istediğinizi belirtin, ilgili komut ve
                            açıklamasıyla size anlatalım.
                        </div>
                    </div>
                </div>
                <div className="visible h-100">
                    <div className="title-container container my-3">
                        <h1 className="title"># git hızlı komut seti</h1>
                        <p>Tam olarak ne yapmak istediğinizi belirtin, ilgili komut ve açıklamasıyla size anlatalım.</p>
                    </div>
                    <div className="io-wrapper container d-flex">
                        <div className="form-group w-50 mx-2">
                            <label htmlFor="commands">Komutu</label>
                            <select value={this.state.selectedCommand} className="form-control" id="commands" onChange={this.selectCommand.bind(this)}>
                                {this.state.cmdList.map((item, i) => {
                                    return <option key={'cmd' + i} value={i}>{item.name}</option>;
                                })}
                            </select>
                        </div>
                        <div className="form-group w-50 mx-2">
                            <label htmlFor="commandsDo">ile yapılabilenler</label>
                            <select value={this.state.selectedAction} className="form-control" id="commandsDo" onChange={this.selectAction.bind(this)}>
                                {this.state.cmdList[this.state.selectedCommand].actions.map((item, i) => {
                                    return <option value={i} key={'cmdDo'+i}>{item.name}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                    <hr className="mx-4" />
                    <div className="console px-2 py-3 d-flex flex-column">
                        {this.state.cmdList[this.state.selectedCommand].actions[this.state.selectedAction].samples.map((item, i) => {
                            return (
                                <div className="command-list-item active" data-cmd="init" key={'cmdList'+i}>
                                    <div className="command-item d-flex">
                                        <div className="user pr-2">root</div>
                                        <div className="path pr-2">~</div>
                                        {Array.isArray(item.code) ? (
                                            <div className="multiple-codes">
                                                {item.code.map((code, i) => {
                                                    return (
                                                        <div className="cmd">{code}</div>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <div className="cmd">{item.code}</div>
                                        )}
                                    </div>
                                    {Array.isArray(item.note) ? (
                                        <div className={'multiple-commands'}>
                                            {item.note.map((note, i) => {
                                                return (
                                                    <div className="command-desc py-4">{note}</div>
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div className="command-desc py-4">{item.note}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Console;
