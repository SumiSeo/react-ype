import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchStates {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchStates = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const selected = this.props.users.find((user) => {
      return user.name === this.state?.user?.name;
    });
    this.setState({ user: selected });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <div>
          User Search
          <input
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <button onClick={this.onClick}>Find User</button>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}
export default UserSearch;
