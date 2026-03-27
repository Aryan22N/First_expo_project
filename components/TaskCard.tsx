import { Task, TaskStatus } from '@/constants/task';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

type TaskCardProps = {
  task: Task;
};

const getStatusStyle = (status: TaskStatus) => {
  switch (status) {
    case 'Done':
      return { color: Colors.statusDone, bg: 'rgba(74, 222, 128, 0.12)' };
    case 'In Progress':
      return { color: Colors.statusInProgress, bg: 'rgba(251, 191, 36, 0.12)' };
    case 'To-do':
      return { color: Colors.statusTodo, bg: 'rgba(56, 189, 248, 0.12)' };
  }
};

const TaskCard = ({ task }: TaskCardProps) => {
  const statusStyle = getStatusStyle(task.status);

  return (
    <View style={styles.card}>
      {/* Left accent line */}
      <View style={[styles.accentLine, { backgroundColor: task.icon.backgroundColor }]} />

      {/* Icon */}
      <View style={[styles.iconContainer, { backgroundColor: task.icon.backgroundColor + '26' }]}>
        <Ionicons name={task.icon.name as any} size={20} color={task.icon.backgroundColor} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.category} numberOfLines={1}>{task.category}</Text>
        <Text style={styles.title} numberOfLines={1}>{task.title}</Text>

        <View style={styles.footer}>
          {/* Time */}
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={12} color={Colors.textSecondary} />
            <Text style={styles.time}>{task.time}</Text>
          </View>

          {/* Status badge */}
          <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.color }]}>{task.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 16,
    marginBottom: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  accentLine: {
    width: 3,
    height: '100%',
    borderRadius: 4,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
  },
});