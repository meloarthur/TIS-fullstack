declare namespace Models {
  interface Login {
    username: string;
    password: string;
  }

  namespace Login {
    interface Response {
      user: Models.User;
      token: string;
      refresh: string;
    }
  }

  interface ChangePassword {
    old_password: string;
    new_password: string;
    user_id: string;
  }
}
