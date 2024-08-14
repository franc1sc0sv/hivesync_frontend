type Option = {
  name: string;
  id: string;
};

type Options = Option[];

type PropsSelect = {
  name: string;
  text: string;
  required: boolean;
  placeholder: string;
  Icon: IconType;
  StrokeIcon: boolean;
  options: Options;
};
