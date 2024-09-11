export type IntroProps = {
  name: string;
  msgNum: number;
  isLoggedIn: boolean;
};

export type StudentProps = {
  name: {
    first: string;
    last: string;
  };
};

export type StudentListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export type StatusProps = {
  status: "loading" | "success" | "error";
};

export type ContactProps = {
    children: string
}

export type LessonProps = {
  lesson: string
}

export type LessonDaysProps ={
  lesson: {
    name: string
    room: number
    students: number
    degree: string
    day: string
    hour: string
  }[]
}
