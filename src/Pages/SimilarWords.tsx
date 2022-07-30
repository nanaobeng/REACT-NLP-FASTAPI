import { FC } from "react";
import { Badge } from "@mantine/core";
interface Props {
  words: any;
}
const SimilarWords: FC<Props> = ({ words }) => {
  return (
    <>
      {words &&
        words.map((data: any, i: number) => {
          return (
            <Badge className="p-4" variant="outline">
              {data}
            </Badge>
          );
        })}
    </>
  );
};
export default SimilarWords;
