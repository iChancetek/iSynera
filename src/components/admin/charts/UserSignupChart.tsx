'use client';

import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { DocumentData } from 'firebase/firestore';
import { subDays, format } from 'date-fns';

interface UserSignupChartProps {
  data: DocumentData[];
}

const processData = (users: DocumentData[]) => {
  if (!users || users.length === 0) return [];

  const thirtyDaysAgo = subDays(new Date(), 30);
  const dailyCounts: { [key: string]: number } = {};

  for (let i = 0; i < 30; i++) {
    const date = subDays(new Date(), i);
    const formattedDate = format(date, 'MMM d');
    dailyCounts[formattedDate] = 0;
  }

  users.forEach(user => {
    if (user.signUpDate && user.signUpDate.seconds) {
      const signUpDate = new Date(user.signUpDate.seconds * 1000);
      if (signUpDate >= thirtyDaysAgo) {
        const formattedDate = format(signUpDate, 'MMM d');
        if (dailyCounts[formattedDate] !== undefined) {
          dailyCounts[formattedDate]++;
        }
      }
    }
  });

  return Object.entries(dailyCounts)
    .map(([date, count]) => ({ date, count }))
    .reverse();
};

export default function UserSignupChart({ data }: UserSignupChartProps) {
  const chartData = processData(data);
  const chartConfig = {
    users: {
      label: 'New Users',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <div className="h-[250px] w-full">
      <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={12}
            />
            <Tooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-users)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
