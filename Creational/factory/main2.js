/* Here we are passing a parameter to repoFactory and getting the required repo. A fairly good improvement over main.js
However, For every user object instance userRepo is created. We need to chace the created repo. Find repoFactory with cache mechanism for the same


*/

import repoFactory from './repoFactory';


import Task from './task';
import User from './user';
import Project from './project';

var authetication = new Task(repoFactory.getRepo('task').get(1))

var user = new User(repoFactory.getRepo('user').get(1))
var project = new Project(repoFactory.getRepo('project').get(1))

authetication.addUser(user)
project.addTask(authetication)