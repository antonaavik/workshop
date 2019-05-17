interface IEvent {
  name: string;
}

interface INew {
  title: string;
  text: string;
  image: string;
  author: string;
  date: Date;
  tags: string[];
  comments?: IComment[],
}

interface IComment {
  id: string;
  author: string;
  date: Date;
  likes: number;
  text: string;
}