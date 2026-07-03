import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  private courses = []; // Replace with actual database/storage logic later

  getAllCourses() {
    return this.courses;
  }

  getCourseById(id: string): string {
    return `Get Course with ID: ${id} - from Service`;
  }

  createCourses(): string {
    return 'course'
  }

  updateCourse(id: string): string {
    return `Update Course ${id} - from Service`;
  }

  patchCourse(id: string): string {
    return `Patch Course ${id} - from Service`;
  }

  deleteCourse(id: string): string {
    return `Delete Course ${id} - from Service`;
  }


}
