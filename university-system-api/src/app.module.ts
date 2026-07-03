import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentService } from './enrollment/enrollment.service';
import { EnrollmentController } from './enrollment/enrollment.controller';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [CourseModule, EnrollmentModule, NotificationModule],
  controllers: [AppController, EnrollmentController],
  providers: [AppService, EnrollmentService],
})
export class AppModule {}
