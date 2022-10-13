import { Component } from '@angular/core';
import { UserBlobServiceService } from './services/user-blob-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users: any = [];
  public blogs: any = [];
  public name!: string;
  public id = this.blogs.length;
  public editStatus = false;
  public index!: number;
  constructor(
    public service: UserBlobServiceService
  ) { }

  ngOnInit(): void {
    this.users = this.service.users;
    this.blogs = this.service.blogs;
  }

  singIn() {
    document.querySelector<HTMLDivElement>('.sign-in-modal')!.style.display = 'flex';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'block';
  }

  singUp() {
    document.querySelector<HTMLDivElement>('.sing-up-modal')!.style.display = 'block';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'block';
  }

  newUserSingUp(): any {
    let valid = true;
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email);

      if (this.users[i].email == document.querySelector<HTMLInputElement>('.email-input')!.value || this.users[i].name == document.querySelector<HTMLInputElement>('.username-input')!.value) {
        console.log('THERE IS A LIL PROBLEM YOU ARE IN A PICKLE JEEZ IDK');
        document.querySelector<HTMLInputElement>('.username-input')!.value = '';
        document.querySelector<HTMLInputElement>('.email-input')!.value = '';
        document.querySelector<HTMLInputElement>('.password-input')!.value = '';
        document.querySelector<HTMLDivElement>('.sing-up-modal')!.style.display = 'none';
        document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
        console.log(this.users);

        valid = false;
      }

    }

    if (valid === true) {
      const newUser = {
        name: document.querySelector<HTMLInputElement>('.username-input')!.value,
        email: document.querySelector<HTMLInputElement>('.email-input')!.value,
        password: document.querySelector<HTMLInputElement>('.password-input')!.value,
        status: 'user'
      }
      this.users.push(newUser);
      console.log(this.users);
    }

    document.querySelector<HTMLInputElement>('.username-input')!.value = '';
    document.querySelector<HTMLInputElement>('.email-input')!.value = '';
    document.querySelector<HTMLInputElement>('.password-input')!.value = '';
    document.querySelector<HTMLDivElement>('.sing-up-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
  }


  singOut() {
    document.querySelector<HTMLDivElement>('.user-in')!.style.display = 'none';
    document.querySelector<HTMLButtonElement>('.sing-in')!.style.display = 'block';
    document.querySelector<HTMLButtonElement>('.add-post')!.style.display = 'none';
    document.querySelector<HTMLButtonElement>('.sing-up')!.style.display = 'block';
    document.querySelector<HTMLButtonElement>('.sing-out')!.style.display = 'none';
    for (let i = 0; i < document.querySelectorAll<HTMLButtonElement>('.blog-edit').length; i++) {
      document.querySelectorAll<HTMLButtonElement>('.blog-edit')[i]!.style.display = 'none';
      document.querySelectorAll<HTMLButtonElement>('.blog-delete')[i]!.style.display = 'none';
    }
  }

  sumbitButton() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === document.querySelector<HTMLInputElement>('.email-form-sing-in')!.value && this.users[i].password === document.querySelector<HTMLInputElement>('.password-form-sing-in')!.value) {
        this.name = this.users[i].name;
        document.querySelector<HTMLDivElement>('.sign-in-modal')!.style.display = 'none';
        document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';

        if (this.users[i].status === 'admin') {
          for (let i = 0; i < document.querySelectorAll<HTMLButtonElement>('.blog-edit').length; i++) {
            document.querySelectorAll<HTMLButtonElement>('.blog-edit')[i]!.style.display = 'block';
            document.querySelectorAll<HTMLButtonElement>('.blog-delete')[i]!.style.display = 'block';
          }
        }


        for (let i = 0; i < this.blogs.length; i++) {
          if (this.name === this.blogs[i].postedBy) {
            console.log(document.querySelectorAll<HTMLButtonElement>('.blog-edit')[this.blogs[i].id - 1]);
            document.querySelectorAll<HTMLButtonElement>('.blog-edit')[this.blogs[i].id - 1]!.style.display = 'block';
            document.querySelectorAll<HTMLButtonElement>('.blog-delete')[this.blogs[i].id - 1]!.style.display = 'block';
          }
        }
        document.querySelector<HTMLDivElement>('.user-in')!.style.display = 'flex';
        document.querySelector<HTMLButtonElement>('.sing-in')!.style.display = 'none';
        document.querySelector<HTMLButtonElement>('.add-post')!.style.display = 'block';
        document.querySelector<HTMLButtonElement>('.sing-up')!.style.display = 'none';
        document.querySelector<HTMLButtonElement>('.sing-out')!.style.display = 'block';
      }
    }

    document.querySelector<HTMLInputElement>('.email-form-sing-in')!.value = '';
    document.querySelector<HTMLInputElement>('.password-form-sing-in')!.value = '';


  }

  closeModal() {
    document.querySelector<HTMLDivElement>('.sign-in-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
  }


  closePostModal() {
    document.querySelector<HTMLDivElement>('.add-post-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
  }

  closeSingUp() {
    document.querySelector<HTMLDivElement>('.sing-up-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
  }
  
  closeEditModal() {
    document.querySelector<HTMLDivElement>('.edit-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
  }

  showModal() {
    document.querySelector<HTMLDivElement>('.add-post-modal')!.style.display = 'flex';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'block';
  }



  addPost() {
    const date = new Date();
    const year: any = date.getFullYear();
    const day: any = date.getDay();
    const month: any = date.getMonth();
    const minutes: any = date.getMinutes();
    const hours: any = date.getHours();
    const seconds: any = date.getSeconds();
    const setDate = new Date(year, month, day, hours, minutes, seconds);
    if (document.querySelector<HTMLInputElement>('.tittle-input')!.value !== '' && document.querySelector<HTMLInputElement>('.post-text')!.value !== '') {
      let id = this.blogs.length + 1;
      const newPost = {
        id: id,
        postedBy: this.name,
        topic: document.querySelector<HTMLInputElement>('.tittle-input')!.value,
        date: setDate,
        message: document.querySelector<HTMLInputElement>('.post-text')!.value
      }

      this.blogs.push(newPost);

      for (let i = 0; i < this.blogs.length; i++) {
        if (this.name === this.blogs[i].postedBy) {
          const id = newPost.id;
          console.log(this.blogs[id - 1]);
          setTimeout(() => {
            for (let i = 0; i < document.querySelectorAll('.blog')[id - 1].children[document.querySelectorAll('.blog')[id - 1].children.length - 1].children.length; i++) {
              document.querySelectorAll<any>('.blog')[id - 1].children[document.querySelectorAll('.blog')[id - 1].children.length - 1].children[i].style.display = 'block'
            }


          }, 20);

        }
      }
    }
    document.querySelector<HTMLDivElement>('.add-post-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
    document.querySelector<HTMLInputElement>('.tittle-input')!.value = '';
    document.querySelector<HTMLInputElement>('.post-text')!.value = ''
  }

  edit(event: any) {
    // this.blog = blog;
    // console.log(this.blog);
    this.editStatus = true;
    this.index = event?.target.parentElement.parentElement.children[0].innerText;
    console.log(event?.target.parentElement.parentElement.children[0].innerText);

    document.querySelector<any>('.tittle-input-edit')!.value = this.blogs[this.index].topic;
    document.querySelector<any>('.edit-text')!.value = this.blogs[this.index].message;
    document.querySelector<HTMLDivElement>('.edit-modal')!.style.display = 'flex';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'block';
  }

  savePost() {
    const editedPost = {
      id: this.blogs[this.index].id,
      postedBy: this.blogs[this.index].postedBy,
      topic: document.querySelector<HTMLInputElement>('.tittle-input-edit')!.value,
      date: this.blogs[this.index].date,
      message: document.querySelector<HTMLInputElement>('.edit-text')!.value
    }

    console.log(this.blogs.splice(this.index, 1, editedPost));
    for (let i = 0; i < this.blogs.length; i++) {
      if (this.name === this.blogs[i].postedBy) {
        setTimeout(() => {
          for (let i = 0; i < document.querySelectorAll('.blog')[this.index].children[document.querySelectorAll('.blog')[this.index].children.length - 1].children.length; i++) {
            document.querySelectorAll<any>('.blog')[this.index].children[document.querySelectorAll('.blog')[this.index].children.length - 1].children[i].style.display = 'block'
          }


        }, 1);

      }
    }

    document.querySelector<HTMLDivElement>('.edit-modal')!.style.display = 'none';
    document.querySelector<HTMLDivElement>('.black-background')!.style.display = 'none';
    this.editStatus = false;
  }

  delete(event: any) {
    this.blogs.splice(event?.target.parentElement.parentElement.children[0].innerText, 1);
  }
}