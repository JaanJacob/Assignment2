import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  groups: any;
  userGroups: any;

  formGroupName: '';
  formRoomName: '';
  newGroupArray= [{groupName:'', members:[{'name':''}], rooms:[{'name':''}]}];

  constructor() {

    this.groups = [
      {groupName: 'cars',
      members: [
        {'name' : 'super'},
        {'name' : 'groupAD'},
        {'name' : 'groupAS'},        
        {'name' : 'aa'}, 
        {'name' : 'bb'}],
      rooms: [
        {'name' : 'holden'},
        {'name' : 'bmw'},
        {'name' : 'audi'}]
      },
      {groupName: 'bikes',
      members: [
        {'name' : 'super'},
        {'name' : 'groupAD'},
        {'name' : 'groupAS'},
        {'name' : 'cc'}, 
        {'name' : 'bb'}],
      rooms: [
        {'name' : 'GSXR'},
        {'name' : 'S1000'},
        {'name' : 'R6'}]
      },
      {groupName: 'Pets',
      members: [
        {'name' : 'super'},
        {'name' : 'groupAD'},
        {'name' : 'groupAS'},
        {'name' : 'dd'}, 
        {'name' : 'ee'}],
      rooms: [
        {'name' : 'cats'},
        {'name' : 'dogs'},
        {'name' : 'mouse'}]
      },
      {groupName: 'Trips',
      members: [
        {'name' : 'super'},
        {'name' : 'groupAD'},
        {'name' : 'groupAS'},
        {'name' : 'dd'}, 
        {'name' : 'bb'}],
      rooms: [
        {'name' : 'GoldCoast'},
        {'name' : 'SunshineCoast'},
        {'name' : 'Brisbane'}]
      }

    ];

    this.userGroups = [
      {groups: '',
      rooms: [
        {'name' : ''}, 
        {'name' : ''}]
      },
      {groups: '',
      rooms: [
        {'name' : ''}, 
        {'name' : ''}]
      },
      {groups: '',
      rooms: [
        {'name' : ''}, 
        {'name' : ''}]
      },
      {groups: '',
      rooms: [
        {'name' : ''}, 
        {'name' : ''}]
      }
    ];

   }

  ngOnInit(): void {
    this.user= (JSON.parse (localStorage.getItem("loggedInUser")));
    let index = 0
    
    for (let g in this.groups) {
      for (let m in this.groups[g].members){
        if (this.groups[g].members[m].name == this.user.name){
          
          this.userGroups[index].groups = this.groups[g].groupName;
          for (let r in this.groups[g].rooms){
            this.userGroups[index].rooms[r] = this.groups[g].rooms[r].name
          }
          index = index + 1;
        }
      }
    }

    console.log("printing");
    console.log(this.user.name);
    console.log(this.groups[0].members);
    console.log(this.userGroups[0].groups);
    console.log(this.userGroups[0].rooms);
  }


  addGroup(){
    if (this.formGroupName == '' || this.formRoomName == '') {
      alert("no data entered");
    }else {
      this.newGroupArray[0].groupName = this.formGroupName;
      this.groups.push(this.newGroupArray[0]);
      console.log(this.groups);
      
    }
  }

  deleteGroup(){
    for (let i in this.groups){
      if (this.groups[i].groupName == this.formGroupName){
        this.groups.splice(i, 1);
        console.log("deleted", this.groups[i]);
      }
    }
  }

}
