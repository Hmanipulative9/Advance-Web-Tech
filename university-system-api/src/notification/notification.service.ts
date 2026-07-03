import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
    constructor(
        @Inject(forwardRef(() => EnrollmentService))
        private readonly enrollmentService: EnrollmentService, // <-- Circular Inject
    ) { }

    sendNotification(studentName: string, message: string) {
        return {
            message: 'Notification sent successfully',
            recipient: studentName,
            content: message,
        };
    }

    checkEnrollmentAndNotify(studentName: string, courseId: string) {
        // Access EnrollmentService to check status
        const enrollments = this.enrollmentService.getEnrollments();
        return {
            status: 'Checked and Notified',
            studentName,
            courseId,
            enrollments,
        };
    }
}
