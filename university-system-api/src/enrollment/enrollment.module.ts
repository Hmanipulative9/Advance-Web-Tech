import { Module, forwardRef } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import { CourseModule } from '../course/course.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
    imports: [
        CourseModule,
        forwardRef(() => NotificationModule), // <-- Use forwardRef for circular modules
    ],
    controllers: [EnrollmentController],
    providers: [EnrollmentService],
    exports: [EnrollmentService], // <-- Export EnrollmentService for NotificationService
})
export class EnrollmentModule { }
