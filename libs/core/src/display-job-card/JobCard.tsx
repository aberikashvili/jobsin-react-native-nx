import { StyleSheet, Text, View } from 'react-native';

type JobType = 'remote' | 'fullTime' | 'partTime';

type JobCardProps = {
  workRate: JobType | string;
  count?: number;
};

export const JobCard = ({ workRate, count }: JobCardProps) => {
  return (
    <View style={styles.card}>
      <Text>{`${count}`}</Text>
      <Text>{`${workRate}`}</Text>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
  },
});
