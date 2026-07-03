import { Module, forwardRef } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EnrollmentModule } from '../enrollment/enrollment.module';

@Module({
  imports: [
    forwardRef(() => EnrollmentModule), // <-- Use forwardRef for circular modules
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService], // <-- Export NotificationService for EnrollmentService
})
export class NotificationModule { }
